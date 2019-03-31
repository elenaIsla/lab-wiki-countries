import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countriesDetail from '../data/countries.json';


class Content extends Component {
    render(){
        return (        
          <div className="scroll-columns col-5">
            <div className="list-group">
            {countriesDetail.map((country, index) =>{
              return (
                <div key={country.cca3}>
                <Link className="list-group-item list-group-item-action" to={`/home/${country.cca3}`}>{country.flag}{country.name.common}</Link>
                </div>
              )
            })}
              {/* <Link class="list-group-item list-group-item-action" to="/ABW">🇦🇼 Aruba</Link>
              <Link class="list-group-item list-group-item-action" to="/AFG">🇦🇫 Afghanistan</Link>
              <Link class="list-group-item list-group-item-action" to="/AGO">🇦🇴 Angola</Link>
              <Link class="list-group-item list-group-item-action" to="/AIA">🇦🇮 Anguilla</Link>
              <Link class="list-group-item list-group-item-action" to="/ALA">🇦🇽 Åland Islands</Link>
              <Link class="list-group-item list-group-item-action" to="/ALB">🇦🇱 Albania</Link>
              <Link class="list-group-item list-group-item-action" to="/AND">🇦🇩 Andorra</Link>
              <Link class="list-group-item list-group-item-action" to="/ARE">🇦🇪 United Arab Emirates</Link>
              <Link class="list-group-item list-group-item-action"  to="/ARG">🇦🇷 Argentina</Link>
              <Link class="list-group-item list-group-item-action" to="/ARM">🇦🇲 Armenia</Link>
              <Link class="list-group-item list-group-item-action" to="/ASM">🇦🇸 American Samoa</Link>
              <Link class="list-group-item list-group-item-action" to="/ATA">🇦🇶 Antarctica</Link>
              <Link class="list-group-item list-group-item-action" to="/FLK">🇫🇰 Falkland Islands</Link>
              <Link class="list-group-item list-group-item-action active" to="/FRA">🇫🇷 France</Link>
              <Link class="list-group-item list-group-item-action" to="/ZWE">🇿🇼 Zimbabwe</Link> */}
            </div>
          </div>
        )
    }

}

export default Content;