async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`http://localhost:1337/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  )
  return data?.posts[0]
}

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      posts {
        slug
      }
    }
  `)
  return data?.allPosts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query Posts($where: JSON){
      posts(sort: "date:desc", limit: 10, where: $where) {
        title
        slug
        excerpt
        date
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
        category{
          name
          slug
          posts{
            title
            slug
          }
        }
      }
    }
  `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: 'published' }),
        },
      },
    }
  )
  return data?.posts
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
      category{
        name
        slug
        posts{
          title
          slug
        }
      }
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug,
          ...(preview ? {} : { status: 'published' }),
        },
        where_ne: {
          ...(preview ? {} : { status: 'published' }),
          slug_ne: slug,
        },
      },
    }
  )
  return data
}

export async function getAllPagesWithSlug() {
  const data = fetchAPI(`
    {
      pages{
        slug
      }
    }
  `)
  return data.allPages
}


export async function getPageBySlug(slug) {
  const data = await fetchAPI(
    `
    query getPageBySlug{
      pages(where: { slug: "${slug}" }){
        id
        slug
        title
        intro_text
        flex_content{
          __typename
            ... on ComponentGeneralBallsack {
              ballsack_title
              ballsack_text
            }
            ... on ComponentGeneralContactInfo{
              address
              email
              telephone
            }
            ... on ComponentGeneralAccordion {
              accordion{
                title
                content
              }
            }
            ... on ComponentGeneralTabs{
              tabunit{
                tab_title
                tab_content
              }
            }
        }
      }
    }`
  );
  return data
}

export async function getPage(slug) {
  const data = await fetchAPI(
    `
      query getPage{
        pages(where: { slug: "${slug}" }){
          id
          title
          slug
          intro_text
          flex_content{
            __typename
              ... on ComponentGeneralBallsack {
                ballsack_title
                ballsack_text
              }
              ... on ComponentGeneralContactInfo{
                address
                email
                telephone
              }
              ... on ComponentGeneralAccordion {
                accordion{
                  title
                  content
                }
              }
              ... on ComponentGeneralTabs{
                tabunit{
                  tab_title
                  tab_content
                }
             }
          }
      }
  }
  `
  );

  return data;
}

export async function getHomePage() {
  const data = await fetchAPI(
    `
    query Home{
      home{
        id
        Slug
        Title
        HomePageContent
      }
    }

    `
  );
  return data
}

