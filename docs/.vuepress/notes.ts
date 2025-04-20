import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: 'auto', // 原 sidebar: ['', 'foo', 'bar'] 改为自动生成
})

const helpNote = defineNoteConfig({
  dir: 'help',
  link: '/help',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote, helpNote],
})

