import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import Table from './table';
import '../App.css';

const API_URL = 'http://localhost:4000/pe';// 'https://league-table.herokuapp.com';

const styles = {
  table: {
    width: '345px',
    float: 'left',
    margin: '5px',
    fontSize: '14px',
  },
  list: {
    display: 'inline-block',
    padding: '10px',
    fontSize: 13,
    border: '1px solid gray',
    borderLeft: 0,
    cursor: 'pointer',
  },
  ul: {
    padding: 0,
    borderLeft: '1px solid gray',
  },
  blurb: {
    background: 'gray',
    width: 695,
    color: 'white',
    fontSize: 13,
    padding: 5,
  },
  main: {
    background: 'transparent linear-gradient(to bottom, #DC1010 0%, #C61102 100%) repeat scroll 0% 0%',
    width: 695,
    padding: 5,
    color: 'white',
  },

};

class PrivateEquity extends Component {

  constructor() {
    super();
    this.state = {};
  }

  async componentWillMount() {
    const res = await axios.get(API_URL);
    const { tabs, results } = res.data;
    this.setState({ tabs, results });
  }

  selectedTab(index) {
    const tabName = this.state.tabs[index];
    console.log(tabName);
  }

  render() {
    if (!this.state.results) {
      return <div>loading...</div>;
    }

    const { tabs, results } = this.state;
    return (
      <div style={{ fontFamily: 'arial' }}>
        <Tabs onSelect={index => this.selectedTab(index)}>
          <TabList style={styles.ul}>
            {tabs.map((name, key) => <Tab key={key} style={styles.list}>{name}</Tab>)}
          </TabList>
          <div style={styles.main}>Bankruptcy Rankings Chart <small>First Half</small></div>
          <div style={styles.blurb}>U.S bankruptcy cases with $25m+ in liabilites <small>First Half</small></div>

          {tabs.map((result, key) => {
            const investmentByCases = results.filter(e => e.TAB === result && e.RANKTYPE === 'CASES');
            const investmentByVolume = results.filter(e => e.TAB === result && e.RANKTYPE === 'VOLUME');
            return (
              <TabPanel key={key}>
                <div style={styles.table}>
                  <Table title="Top Investment advisers, by dollar volume" data={investmentByVolume} type="volume" />
                </div>
                <div style={styles.table}>
                  <Table title="Top Investment advisers, by no. of cases" data={investmentByCases} />
                </div>
              </TabPanel>
            );
          })}
        </Tabs>
      </div>

    );
  }
}

export default PrivateEquity;
