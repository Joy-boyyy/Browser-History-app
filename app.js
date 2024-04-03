import {Component} from 'react'

import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software • GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    gotArray: initialHistoryList,
    copiedArr: initialHistoryList,
    isTrue: true,
  }

  onDelBtn = ID => {
    const {gotArray} = this.state
    const filterVar = gotArray.filter(filterProp => filterProp.id !== ID)

    if (filterVar.length > 0) {
      this.setState({gotArray: filterVar, isTrue: true})
    } else {
      this.setState({isTrue: false})
    }
  }

  inputChangeFun = event => {
    const {copiedArr} = this.state
    const filteredArr = copiedArr.filter(filterProp =>
      filterProp.title.toLowerCase().includes(event.target.value.toLowerCase()),
    )

    if (filteredArr.length > 0) {
      this.setState({gotArray: filteredArr, isTrue: true})
    } else {
      this.setState({isTrue: false})
    }
  }

  ulFunction = gotArray => (
    <ul className="ul">
      {gotArray.map(mapProp => (
        <ItemsComponent
          key={mapProp.id}
          allData={mapProp}
          onDelBtn={this.onDelBtn}
        />
      ))}
    </ul>
  )

  notFound = () => (
    <div>
      <p>There is no history to show</p>
    </div>
  )

  render() {
    const {gotArray, isTrue} = this.state

    return (
      <div className="parentDiv">
        <div className="childDiv1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="historyImg"
          />

          <div className="inputDiv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="searchIcon"
            />
            <input
              type="search"
              placeholder="Search history"
              className="inputCL"
              onChange={this.inputChangeFun}
            />
          </div>
        </div>

        <div className="childDiv2">
          {isTrue ? this.ulFunction(gotArray) : this.notFound()}
        </div>
      </div>
    )
  }
}

function ItemsComponent(props) {
  const {allData, onDelBtn} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = allData

  const delBtnClicked = () => {
    onDelBtn(id)
  }

  return (
    <li className="liCl">
      <div className="liData">
        <p className="time">{timeAccessed}</p>
        <div className="img-Del">
          <div className="logoDetail">
            <img src={logoUrl} alt="domain logo" className="imgLogo" />
            <p className="didMargin">{title}</p>
            <p className="didMargin">{domainUrl}</p>
          </div>
          <button
            type="button"
            className="delBtn"
            onClick={delBtnClicked}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="imgLogo"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default App
