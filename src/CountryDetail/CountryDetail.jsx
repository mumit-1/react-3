// import CountryDataa from "../CountryData/CountryData";
import CountryData from './../CountryData/CountryData';
const CountryDetail = (props) => {
    const {info,BtnDynamic} = props // this is the shortcut of getting  data from another file
    console.log(info,BtnDynamic);
    return (
        <div>
    <CountryData {...props}></CountryData>  {/* this is the shortcut of ssending data to another file  */}
        </div>
    );
};

export default CountryDetail;