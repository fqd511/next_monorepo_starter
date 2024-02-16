import { render, within,screen } from "@testing-library/react";
import { PrimaryButton } from "../PrimaryButton";
import { expect, test } from 'vitest'


test('PrimaryButton', () => {
  render(<PrimaryButton>hello</PrimaryButton>)
  const button = within(screen.getByRole('button'))

  expect(button).toBeDefined()
})
