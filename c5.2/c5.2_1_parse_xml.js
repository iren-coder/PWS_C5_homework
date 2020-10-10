// XML parser
const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
console.log("xmlString", xmlString)

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelectorAll('student');
console.log(studentNode.length)

const nameNode = firstStudent.querySelector('name');
const firstNameNode = nameNode.querySelector('first');
const secondNameNode = nameNode.querySelector('second');
const ageNode = firstStudent.querySelector('age');
const profNode = firstStudent.querySelector('prof');
const langAttr = nameNode.getAttribute('lang');
​
const nameNode2 = secondStudent.querySelector('name');
const firstNameNode2 = nameNode2.querySelector('first');
const secondNameNode2 = nameNode2.querySelector('second');
const ageNode2 = secondStudent.querySelector('age');
const profNode2 = secondStudent.querySelector('prof');
const langAttr2 = nameNode2.getAttribute('lang');
​
console.log(firstStudent);
console.log(secondStudent);