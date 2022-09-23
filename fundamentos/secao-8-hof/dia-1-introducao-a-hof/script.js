const employeeInfo = (nome) => {
    const emailEmployee = nome.toLowerCase().split(' ').join('_');
    return { nome, email: `${emailEmployee}@trybe.com` };
}
console.log(employeeInfo('Pedro Guerra'));

const newEmployees = (employeeInfo) => {
    const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };