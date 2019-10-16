import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';

class PostsListPage extends React.Component {
  state = {
    posts: [],
    loading: true,
  }

  deletePost = (id) => {
    fetch("/api/posts/" + id, {
      method: 'DELETE',
      credentials: 'include',
    }).then(this.fetchPosts)
  }

  fetchPosts = () => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p, ii) => <Post {...p} deletePost={this.deletePost} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  componentDidMount = () => this.fetchPosts()

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          {this.state.posts}
        </div>
      </div>
    );
  }
}

export default PostsListPage;