import React, { Component } from 'react';
import { firestore, auth } from '../firebase';
import { collectIdsAndDocs } from '../utilities';
import Authentication from './Authentication';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';

import Posts from './Posts';

class Application extends Component {
  state = {
    posts: [],
    user: null,
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    })

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
    this.unsubscribeFromAuth();
  }

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
           {user ? <CurrentUser {...user} /> : <SignIn />}
           <Posts posts={posts}/>
      </main>
    );
  }
}

export default Application;
