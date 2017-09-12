import React from 'react';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import RecentsIcon from 'material-ui/svg-icons/communication/business';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Constants from "../Constants";

// const recentsIcon = <RecentsIcon/>;
// const favIcon = <FavoriteIcon/>;
// const locationIcon = <IconLocationOn/>;

export default class BottomBar extends React.Component {
    /*state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});*/

    render() {
        return (
            <Paper zDepth={2} style={Constants.STYLES.bottomBar}>
                Mercado das Peças - todos os direitos reservados
                {/*<BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Vistas recentemente"
                        icon={recentsIcon}
                        onClick={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Favoritas"
                        icon={favIcon}
                        onClick={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Raio de 100 km"
                        icon={locationIcon}
                        onClick={() => this.select(2)}
                    />
                </BottomNavigation>*/}
            </Paper>
        );
    }
}