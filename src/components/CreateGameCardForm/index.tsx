import { useState,useLayoutEffect } from "react";
import {
  Select,
  InputNumber,
  Input,
  Button,
  Upload,
} from "antd";
import { CreateForm, ModifyAntdStyle } from "./Style";
import { UploadOutlined } from "@ant-design/icons";
import { 
  roleCardCreateRequest,
  effectCardCreateRequest,
  getAttributeList,
  getNatureList,
  getRaceList
} from "api/cardManageRequest";
import { useCookie } from "hooks";
import { 
  RoleCardCreateInfo,
  EffectCardCreateInfo,
  Nature,
  Attribute,
  Race
} from "types/api";
import "antd/dist/antd.css";

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
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const CreateGameCardForm = () => {
  const [loginId, setLoginId] = useCookie("login-id", "");
  const [selectedCategory, setSelectedCategory] = useState("role");
  const [attributeList,setAttributeList] = useState<Attribute[]>([]);
  const [natureList,setNatureList] = useState<Nature[]>([]);
  const [raceList,setRaceList] = useState<Race[]>([]);

  const initialSelectList = ()=>{
    getAttributeList(loginId).then(setAttributeList);
    getNatureList(loginId).then(setNatureList);
    getRaceList(loginId).then(setRaceList);
  }

  const convertFormValuesToRoleCardCreateInfo = (values: any):RoleCardCreateInfo=>{
    return {
      Name: values.name,
      ImgFile: values.upload[0].originFileObj,
      Attribute_ID: parseInt(values.attribute),
      Star: parseInt(values.star),
      Race_ID: parseInt(values.race),
      Effect_Assert: values.effectAssert,
      Effect_Description: values.effectDescription,
      Attack: parseInt(values.attack),
      Defense: parseInt(values.defense),
    }
  }

  const convertFormValuesToEffectCardCreateInfo = (values: any):EffectCardCreateInfo=>{
    return {
      Name: values.name,
      ImgFile: values.upload[0].originFileObj,
      Effect_Assert: values.effectAssert,
      Effect_Description: values.effectDescription,
      Nature_ID:values.nature
    }
  }

  const onFinish = (values: any) => {
    console.log(values)
    // if(selectedCategory === "role"){
    //   let roleCardCreateInfo = convertFormValuesToRoleCardCreateInfo(values);
    //   roleCardCreateRequest(loginId, roleCardCreateInfo);
    // }else{
    //   let effectCardCreateInfo = convertFormValuesToEffectCardCreateInfo(values);
    //   effectCardCreateRequest(loginId, effectCardCreateInfo);
    // }
  };

  const onCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  useLayoutEffect(()=>{
    initialSelectList();
  },[]);

  return (
    <CreateForm
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        "input-number": 3,
        "checkbox-group": ["A", "B"],
        rate: 3.5,
      }}
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
          defaultActiveFirstOption={true}
        >
          <Option value="role">Role</Option>
          <Option value="effect">Effect</Option>
        </Select>
      </CreateForm.Item>
      {selectedCategory === "role" && (
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
            {raceList.map((race,index)=>{
              return <Option key={index} value={race.ID}>{race.Name}</Option>
            })}
          </Select>
        </CreateForm.Item>
      )}

      {selectedCategory === "role" && (
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
            {attributeList.map((attribute,index)=>{
              return <Option key={index} value={attribute.ID}>{attribute.Name}</Option>
            })}
          </Select>
        </CreateForm.Item>
      )}

      {selectedCategory === "effect" && (
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
            {natureList.map((nature,index)=>{
              return <Option key={index} value={nature.ID}>{nature.Name}</Option>
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
      {selectedCategory === "role" && (
        <CreateForm.Item
          label="Star"
        >
          <CreateForm.Item
            rules={[
              {
                required: true,
                message: "Please input Star Number!",
              },
            ]}
            name="star" noStyle>
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
            message: 'Please select your Effect Assert!',
            type: 'array',
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select Effect Assert">
          <Option value="新增100點攻擊力">新增100點攻擊力</Option>
          <Option value="破壞場上一張卡牌">破壞場上一張卡牌</Option>
          <Option value="增加100點血量">增加100點血量</Option>
        </Select>
      </CreateForm.Item>

      {selectedCategory === "role" && (
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

      {selectedCategory === "role" && (
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
        <Upload name="logo" action="/upload.do" listType="picture">
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

export default CreateGameCardForm;
