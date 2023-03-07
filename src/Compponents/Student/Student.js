import "./Student.css"
export const Student = (props) => {
  return props?.data?.map((x) => (
    <div className="studentInfo"><li className="dot"> Name:{x?.name}<br />
      <li>Profession: {x?.profession} </li></li></div>
  ))
};

export const Student1 = (props) => {
  return props?.data?.map((y) => (
    <div className="studentdata"> My name is {y.name}<br />
      My profession is {y.profession}


    </div>))
};
export const Student2 = (props) => {
  return props?.arr?.map((z) => (<div className="Studentnew"> My name is {z.name}<br />
    and my cast is {z.cast}{z.profession}</div>))
};
export const Student3 = (props) => {
  return props?.names.map((a) => {
    return <div className="Studentnames">
      <li>
        names:{a}
      </li>
    </div>
  })
}