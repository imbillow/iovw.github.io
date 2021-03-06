import Layout from '../components/layout'
import SEO from '../components/seo'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const style = {
  friendLink: {
    display: 'flex',
    margin: '20px 0',
    height: 100
  },
  avatar: {
    width: '100px'
  },
  meta: {
    padding: '0 20px',
    flex: '1 0 0'
  }
}

export default function FriendsPage() {
  const friends = useStaticQuery(graphql`
    query FriendsQuery {
      allFriendsJson {
        nodes {
          id
          name
          link
          bio
          avatarUrl
        }
      }
    }
  `).allFriendsJson.nodes

  return (
    <Layout>
      <SEO title="Friends" />
      <h1>Friends</h1>
      <div>
        {friends.map(f => (
          <div style={style.friendLink} key={f.id}>
            <img
              style={style.avatar}
              src={f.avatarUrl}
              alt={`Avatar of ${f.name}`}
            />
            <a style={style.meta} href={f.link}>
              <h4 style={style.friendName}>{f.name}</h4>
              <p style={style.friendBio}>{f.bio}</p>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}
