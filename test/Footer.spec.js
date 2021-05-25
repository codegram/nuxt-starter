import { render } from '@testing-library/vue'
import Footer from '@/components/layout/LayoutFooter.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const { getByText } = render(Footer)
    getByText('Footer')
  })
})
