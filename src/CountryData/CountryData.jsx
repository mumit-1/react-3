

const CountryData = (props) => {
    const {info,BtnDynamic} = props;
    console.log(BtnDynamic);
    return (
        <div>
    <hr />
    <h3>country detail : {info?.name?.common}</h3>
    <h3>country detail 2 : </h3>            
        </div>
    );
};

export default CountryData;