import { Component } from "react";

class PersianPrice extends Component {
  render() {
    let en_number = this.props.number.toString();
    let persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    let persianMap = persianDigits.split("");
    let persian_number = en_number.replace(/\d/g, function (m) {
      return persianMap[parseInt(m)];
    });

    return <span className="text-2xl dark:white">{persian_number} تومان</span>;
  }
}

export default PersianPrice;
