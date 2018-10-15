import Mock from "mockjs";
const MockRandom = Mock.Random;
const userData = function(){
  let userDatas = {
    name: MockRandom.cname(),
    age: MockRandom.integer(1,120)
  };
  return {
    success: true,
    data: userDatas
  }
}
Mock.mock('/getUser','get',userData);