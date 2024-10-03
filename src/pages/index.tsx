// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// import Profile from "./components/profile";
// import ProfileMistake from "./qcomps/profile_mistake";
// import MyFirstComp from "./qcomps/firstcomp";
// import Bio from "./qcomps/bios";
// import TodoList from "./qcomps/todos";
// import ProfileProps from "./components/profile_props";
// import GalleryProps from "./qcomps/gallery_props";
// import PackingList from "./qcomps/props_item";
import RecipeList from "./qcomps/recipes";
import List from "./qcomps/list_keys_id";
import Gallery from "./qcomps/state";
import Form from "./qcomps/stuckForm";
import FeedbackForm from "./qcomps/thankYouCrash";

export default function Home() {
  return (
    <>
      {/* <Profile />
      <ProfileMistake />
      <MyFirstComp />
      <Bio />
      <TodoList />
      <ProfileProps />
      <GalleryProps />
      <PackingList /> */}
      <RecipeList />
      <List />
      <Gallery />
      <Form />
      <FeedbackForm />
    </>
  );
}
