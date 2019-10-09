import React, { Component } from 'react'
import { TextInput, Button } from 'react-native';
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

    doFetch() {
        // const {search} = this.state;
        // console.log(search)

        let url = "https://en.wikipedia.org/w/api.php";
        const params = {
            action: "opensearch",
            search: this.state.search,
            // search: "Niagara Falls",
            limit: "5",
            namespace: "0",
            format: "json"
        };

        url = url + "?origin=*";
        Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
        console.log(url);

        return fetch('url')
          .then(response => response.json())
          .then(responseJson => {
            this.props.renderList(responseJson)
          }).then(
            //     this.setState({
            //       search: ''
            //   })
            console.log(responseJson)
          )
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
            />
            <Button
                title="Search"
                onPress={this.doFetch}
            />
        </>
    
      )
    }
  }
  