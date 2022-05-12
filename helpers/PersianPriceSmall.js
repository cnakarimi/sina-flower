import { Component } from "react";

class PersianPriceSmall extends Component {
  render() {
    let en_number = this.props.number.toString();
    let persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    let persianMap = persianDigits.split("");
    let persian_number = en_number.replace(/\d/g, function (m) {
      return persianMap[parseInt(m)];
    });

    return (
      <span className="text-tiny sm:hidden dark:text-white">
        {persian_number} تومان
      </span>
    );
  }
}

export default PersianPriceSmall;
