import React from 'react'
import App from 'next/app'
import SiteLayout from '../components/SiteLayout'
import AccountSettingsLayout from '../components/AccountSettingsLayout'
import '../css/tailwind.css'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    if (router.pathname.startsWith('/account-settings/')) {
      return (
        <SiteLayout>
          <AccountSettingsLayout>
            <Component {...pageProps} />
          </AccountSettingsLayout>
        </SiteLayout>
      )
    }

    return (
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    )
  }
}

export default MyApp
