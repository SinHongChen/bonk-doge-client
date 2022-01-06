export default interface GameInfo {
    currentPlayer:string,
    enemy:EnemyInfo,
    self:SelfInfo
}

export interface EnemyInfo {
    boardCards:string[],
    handCardsNumber:number,
    remainingCardsNumber:number,
    hp:number
}

export interface SelfInfo {
    boardCards:string[],
    handCards:string[],
    remainingCardsNumber:number,
    hp:number
}