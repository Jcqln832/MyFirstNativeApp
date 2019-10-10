import React, { Component } from 'react'
import { TextInput, Button, StyleSheet } from 'react-native';
// import { green, yellow } from 'ansi-colors';
// import { SearchBar } from 'react-native-elements';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }

    updateSearch = (text) => {
        this.setState({ search: text });
        console.log(this.state.search)
    };

    doFetch = () => {

        let url = "https://en.wikipedia.org/w/api.php";
        const params = {
            action: "opensearch",
            search: this.state.search,
            limit: "5",
            namespace: "0",
            format: "json"
        };

        url = url + "?origin=*";
        Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
        console.log(url);

        return fetch('url', {
            method: 'GET',
            headers: {'Content-Type': 'application/json',}
        })
          .then(res => {
            if(!res.ok) {
            throw new Error('Something went wrong, please try again later');
            console.log(res.status);
          }
          return res.json();
        }).then(data => {
            console.log(data);
            this.props.renderList(data)
          })
        //   .then(
        //         this.setState({
        //           search: ''
        //       })
        //   )
          .catch(error => {
            console.error(error);
          });
    }

    render() {
    //   const { search } = this.state;
  
      return (
        <>
            <TextInput
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                style={styles.searchBox}
                onSubmitEditing = {this.doFetch}
            />
            {/* <Button
                title="Search"
                onPress={this.doFetch}
                style={styles.button}
            /> */}
        </>
    
      )
    }
  }
  
  const styles = StyleSheet.create({
     searchBox: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
        borderColor: '#dfdfdf',
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 20
      }
  });