import React, { useEffect } from "react"
import { BounceLoader } from "react-spinners"
import styled from "styled-components"

const Spinner = ({ loading, setLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <SpinnerWrapper>
      <BounceLoader size={50} color={"#123abc"} loading={loading} />
    </SpinnerWrapper>
  )
}

const SpinnerWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: white;
  top: 0;
`

export default Spinner
