import { useState, useLayoutEffect } from "react";
import { Select, InputNumber, Input, Button, Upload,Form } from "antd";
import { CreateForm, ModifyAntdStyle } from "./Style";
import { UploadOutlined } from "@ant-design/icons";
import { getAttributeList, getNatureList, getRaceList } from "api/cardRequest";
import { useCookie } from "hooks";
import {
  RoleCardInfo,
  EffectCardInfo,
  CardInfo,
  Nature,
  Attribute,
  Race,
} from "types/api";
import "antd/dist/antd.css";
import { useEffect } from "react";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e: any) => {

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

function instanceOfEffectCardInfo(object: any): object is EffectCardInfo {
  if(object.Nature_ID) return true;
  return false;
}

export interface GameCardFormProps {
  cardInfo?: CardInfo;
  onFinish: (values: any) => void;
}

const GameCardForm = ({ cardInfo, onFinish }: GameCardFormProps) => {
  const [form] = Form.useForm();
  const [loginId, setLoginId] = useCookie("login-id", "");
  const [initialValue,setInitialValue] = useState<any>({});
  const [selectedCategory, setSelectedCategory] = useState("Role");
  const [attributeList, setAttributeList] = useState<Attribute[]>([]);
  const [natureList, setNatureList] = useState<Nature[]>([]);
  const [raceList, setRaceList] = useState<Race[]>([]);

  const initialSelectList = () => {
    getAttributeList(loginId).then(setAttributeList);
    getNatureList(loginId).then(setNatureList);
    getRaceList(loginId).then(setRaceList);
  };

  const convertImgToFileList = (imgName:string,imgUrl:string)=>{
    return [
      {
        uid: '-1',
        name: `${imgName}`,
        status: 'done',
        url: `${imgUrl}`,
      }
    ]
  }


  const onCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const setInitialValues = (cardInfo: CardInfo) => {
    if (instanceOfEffectCardInfo(cardInfo)) {
      setSelectedCategory("Effect");
      setInitialValue({
        category: "Effect",
        effectAssert: cardInfo.Effect_Assert.split(","),
        effectDescription: cardInfo.Effect_Description,
        name: cardInfo.Name,
        nature: cardInfo.Nature?.ID,
        upload:convertImgToFileList(cardInfo.Img,cardInfo.Img_Url)
      });
    } else {
      setSelectedCategory("Role");
      setInitialValue({
        category: "Role",
        attribute: cardInfo.Attribute?.ID,
        attack: cardInfo.Attack,
        defense: cardInfo.Defense,
        effectAssert: cardInfo.Effect_Assert.split(","),
        effectDescription: cardInfo.Effect_Description,
        name: cardInfo.Name,
        race: cardInfo.Race?.ID,
        star: cardInfo.Star,
        upload:convertImgToFileList(cardInfo.Img,cardInfo.Img_Url)
      });
    }
  };

  useLayoutEffect(() => {
    initialSelectList();
  }, []);

  useLayoutEffect(()=>{
    if(cardInfo){
      setInitialValues(cardInfo);
    }
  },[cardInfo])

  useEffect(()=>{
    form.setFieldsValue(initialValue);
  },[form,initialValue])

  return (
    <CreateForm
      form={form}
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={initialValue}
    >
      <ModifyAntdStyle />
      <CreateForm.Item
        name="category"
        label="Category"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select Category!",
          },
        ]}
      >
        <Select
          onChange={onCategoryChange}
          placeholder="Please select a Category"
        >
          <Option value="Role">Role</Option>
          <Option value="Effect">Effect</Option>
        </Select>
      </CreateForm.Item>
      {selectedCategory === "Role" && (
        <CreateForm.Item
          name="race"
          label="Race"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select Race!",
            },
          ]}
        >
          <Select placeholder="Please select a Race">
            {raceList.map((race, index) => {
              return (
                <Option key={index} value={race.ID}>
                  {race.Name}
                </Option>
              );
            })}
          </Select>
        </CreateForm.Item>
      )}

      {selectedCategory === "Role" && (
        <CreateForm.Item
          name="attribute"
          label="Attribute"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select Attribute!",
            },
          ]}
        >
          <Select placeholder="Please select a Attribute">
            {attributeList.map((attribute, index) => {
              return (
                <Option key={index} value={attribute.ID}>
                  {attribute.Name}
                </Option>
              );
            })}
          </Select>
        </CreateForm.Item>
      )}

      {selectedCategory === "Effect" && (
        <CreateForm.Item
          name="nature"
          label="Nature"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select Nature!",
            },
          ]}
        >
          <Select placeholder="Please select a Nature">
            {natureList.map((nature, index) => {
              return (
                <Option key={index} value={nature.ID}>
                  {nature.Name}
                </Option>
              );
            })}
          </Select>
        </CreateForm.Item>
      )}

      <CreateForm.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input Card Name!",
          },
        ]}
      >
        <Input placeholder="Please input Card Name!" />
      </CreateForm.Item>
      {selectedCategory === "Role" && (
        <CreateForm.Item label="Star">
          <CreateForm.Item
            rules={[
              {
                required: true,
                message: "Please input Star Number!",
              },
            ]}
            name="star"
            noStyle
          >
            <InputNumber min={1} max={10} />
          </CreateForm.Item>
        </CreateForm.Item>
      )}

      <CreateForm.Item
        name="effectDescription"
        label="Effect Description"
        rules={[
          {
            required: true,
            message: "Please input Effect Description!",
          },
        ]}
      >
        <Input />
      </CreateForm.Item>

      <CreateForm.Item
        name="effectAssert"
        label="Effect Assert"
        rules={[
          {
            required: true,
            message: "Please select your Effect Assert!",
            type: "array",
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select Effect Assert">
          <Option value="新增100點攻擊力">新增100點攻擊力</Option>
          <Option value="破壞場上一張卡牌">破壞場上一張卡牌</Option>
          <Option value="增加100點血量">增加100點血量</Option>
        </Select>
      </CreateForm.Item>

      {selectedCategory === "Role" && (
        <CreateForm.Item
          name="attack"
          label="Attack"
          rules={[
            {
              required: true,
              message: "Please input Attack!",
            },
          ]}
        >
          <Input placeholder="Please input Attack!" />
        </CreateForm.Item>
      )}

      {selectedCategory === "Role" && (
        <CreateForm.Item
          name="defense"
          label="Defense"
          rules={[
            {
              required: true,
              message: "Please input Defense!",
            },
          ]}
        >
          <Input placeholder="Please input Defense!" />
        </CreateForm.Item>
      )}

      <CreateForm.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
          {
            required: true,
            message: "Please input Card Name!",
          },
        ]}
      >
        <Upload maxCount={1} name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </CreateForm.Item>
      <CreateForm.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </CreateForm.Item>
    </CreateForm>
  );
};

export default GameCardForm;
