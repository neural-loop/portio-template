module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
        './assets/js/**/*.js',
      ],
      safelist: {
        standard: [
          'show',
          'active',
          'collapsed',
          'nav__color__change',
          'd-none',
          'btn-primary',
          'btn-outline-primary',
          'text-success',
          'text-danger',
          'text-info',
          'lazy',
          'swiper-pagination-bullet',
          'swiper-pagination-bullet-active'
        ],
        deep: [/swiper/],
        greedy: [/navbar-toggler-icon/],
      }
    }
  }
}