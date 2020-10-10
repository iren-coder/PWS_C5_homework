// JSON parser
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;
const first = list[0];
const second = list[1];

const result =
    {
        list: [
            { name: first.name, age: Number(first.age), prof: first.prof },
            { name: second.name, age: Number(second.age), prof: second.prof },
        ]
    }
console.log(result)
