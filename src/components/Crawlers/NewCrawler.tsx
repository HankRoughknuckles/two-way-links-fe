import React from 'react';

interface PublicProps {
}

interface InjectedProps {
}

interface Props extends InjectedProps, PublicProps {}

export class NewCrawler extends React.Component<Props> {
  render() {
    return <div>This is the new crawler page</div>
  }
}

export default NewCrawler
