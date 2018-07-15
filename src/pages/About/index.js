import React, { Component, Fragment } from 'react';

import BasePage from '../Base';

class About extends Component {
  render() {
    return (
      <Fragment>
        <BasePage title="Sobre">
        
          <div className="card mb-4">
            <img className="card-img-top" src="https://picsum.photos/750/300" alt=""/>
            <div className="card-body">
              <h2 className="card-title">Sed mollis, lectus venenatis aliquet pulvinar, metus ante semper tellus.</h2>
              <p className="card-text">
                Nulla venenatis, eros at ultricies sodales, orci purus tincidunt mauris, in volutpat augue nibh vitae sapien. In gravida, urna a elementum iaculis, nulla augue rutrum elit, id semper sapien dolor rutrum leo. Curabitur et dui quis ligula varius vehicula. Cras purus lacus, consequat eget finibus non, iaculis non nulla. Duis sit amet condimentum mi, quis placerat tellus. Nunc ipsum diam, molestie in dui eu, consectetur tempus ipsum. Nunc venenatis accumsan laoreet. Sed auctor lorem eros, quis sodales urna convallis ac. Vestibulum pulvinar ante quis efficitur tincidunt. Sed ut pretium justo, ut gravida ligula. Mauris suscipit nunc id erat vestibulum condimentum. Praesent eget consectetur urna, nec dignissim dui. Vivamus purus massa, dictum quis ultricies eu, pretium et erat. Aenean feugiat cursus congue. Sed dapibus ultricies mi, nec aliquam ipsum vulputate at.
                Aliquam vel molestie odio. Sed id bibendum nisl. Fusce quis interdum enim, sed sagittis urna. Sed diam nibh, ultricies id elit eget, faucibus pretium sem. Praesent convallis posuere purus, nec fermentum leo ultricies a. Ut et sem metus. Etiam blandit velit nec egestas viverra. Nam ultricies nunc vel ligula consequat congue. Maecenas elementum id mauris nec cursus. Nam elementum ultrices aliquet.
              </p>
            </div>
          </div>
      
        </BasePage>
      </Fragment>
    );
  }
}

export default About;