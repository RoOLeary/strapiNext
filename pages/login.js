import { getSession, signIn, signOut } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import React from "react";

import Container from '@/components/container'
import Intro from '@/components/intro'
import Layout from '@/components/layout'

import { CMS_NAME } from '@/lib/constants'

const Login = ({ session }) => {
  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <Layout>
        <div>
          <Link href="http://localhost:3000/api/auth/signin">
            <button
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign In
            </button>
          </Link>
        </div>
      </Layout>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <div>
        <Link href="http://localhost:3000/api/auth/signout">
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </button>
        </Link>
      </div>
    );
  };

  if (!session) {
    return (
      <div className="hero">
        <div className="navbar">
          {signOutButtonNode()}
          {signInButtonNode()}
        </div>
        <div className="text">You aren't authorized to view this page</div>
      </div>
    );
  }

  return (
    <div className="hero">
      <Head>
        <title>Index Page</title>
      </Head>
      <div className="navbar">
        {signOutButtonNode()}
        {signInButtonNode()}
      </div>
      <div className="text">Hello {session.user.name}</div>
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  return {
    props: {
      session,
    },
  };
};

export default Login;