import useFetch from '~/customize/fetch';

import './Cv.scss';

function Covid19() {
    const { data, loading } = useFetch('https://corona.lmao.ninja/v2/countries');

    return (
        <>
            {loading ? (
                <>
                    <div className="loader"></div>
                </>
            ) : (
                <>
                    <br></br>
                    <span style={{ fontSize: '30px' }}>Get covid information from API</span>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Cases</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                className="flag"
                                                alt="la co"
                                                src={item.countryInfo.flag}
                                            />
                                            <p className="country">{item.country}</p>
                                        </td>
                                        <td className="case">{item.cases}</td>
                                        <td className="deaths">{item.deaths}</td>
                                        <td className="recovered">{item.recovered}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
}

export default Covid19;
