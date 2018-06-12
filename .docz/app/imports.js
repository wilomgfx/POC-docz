export const imports = {
  'hall.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "hall" */ 'hall.mdx'),
  'hello.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "hello" */ 'hello.mdx'),
}
