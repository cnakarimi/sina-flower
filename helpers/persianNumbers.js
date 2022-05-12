import { Component } from "react";

class PersianNumber extends Component {
  render() {
    let en_number = this.props.number.toString();
    let persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    let persianMap = persianDigits.split("");
    let persian_number = en_number.replace(/\d/g, function (m) {
      return persianMap[parseInt(m)];
    });

    return <span className="dark:text-green-200">{persian_number}</span>;
  }
}

export default PersianNumber;
