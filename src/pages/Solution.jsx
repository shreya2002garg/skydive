import React from 'react'
import { useLocation } from 'react-router-dom'
import AssetInspection from './Solution/AssetInspection'
export default function Solution() {
    const location = useLocation()
  return (
    <>
    {location.pathname.includes === '/asset-inspection' && <AssetInspection/>}
    <AssetInspection/>
    </>
  )
}
