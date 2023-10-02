import list from './list.json';

export type typeInfo = {
  id: number;
  title: string;
  description: string;
  imgs: string[];
};

export default defineEventHandler((event): typeInfo => {
  const getQuery = () => {
    // 使用字符串操作提取问号后的文本
    const query = (event?._path || '/').split('?')[1];

    // 将查询字符串拆分为键值对
    const keyValuePairs = query.split('&');

    // 创建一个对象来存储键值对
    const paramsObject = {} as Record<string, any>;

    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split('=');
      paramsObject[key] = value;
    });
    return paramsObject;
  };

  const id = Number(getQuery().id);
  if (!isNaN(id)) return list.find((item) => item.id === id) as typeInfo;

  return {} as typeInfo;

  // return list[0] as typeInfo;
});
