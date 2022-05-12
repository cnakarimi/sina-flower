import { Component } from "react";

class PersianPrice extends Component {
  render() {
    let en_number = this.props.number.toString();
    let persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    let persianMap = persianDigits.split("");
    let persian_number = en_number.replace(/\d/g, function (m) {
      return persianMap[parseInt(m)];
    });

    return (
      <span className="xs:text-base text-xs hidden sm:flex dark:text-white">
        {persian_number} تومان
      </span>
    );
  }
}

export default PersianPrice;
