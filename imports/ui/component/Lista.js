import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Delete from 'material-ui/svg-icons/action/delete';
import Constants from "../util/Constants";

const Lista = ({dataSource}) => {

        return (
            <List style={Constants.STYLES.tamanhoMaior}>
                {dataSource.map((item, index) => (
                <ListItem key={item._id} primaryText={item.value} rightIcon={<Delete />} />
                ))}
            </List>
        );
};
export default Lista;