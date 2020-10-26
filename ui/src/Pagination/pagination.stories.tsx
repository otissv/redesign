import React, { useReducer } from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'

import { Pagination } from './Pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
}

function PaginationWarper({ size, currentPage, total, pageSize }: any) {
  const initialState = {
    size,
    currentPage,
    total,
    pageSize,
  }
  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'SET_CURRENT_PAGE': {
        return {
          ...state,
          currentPage: action.payload,
        }
      }
      case 'SET_SIZE':
        return {
          ...state,
          size: action.payload,
        }

      case 'SET_TOTAL':
        return {
          ...state,
          size: action.payload,
        }

      case 'SET_PAGE_SIZE':
        return {
          ...state,
          pageSize: action.payload,
        }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function handlePrevious(_e: any) {
    dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: state.currentPage - 1,
    })
  }

  function handleNext(_e: any) {
    dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: state.currentPage + 1,
    })
  }

  function handleToStart(_e: any) {
    dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: 1,
    })
  }

  function handleToEnd(_e: any) {
    dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: state.total,
    })
  }

  function handlePageClick(e: any) {
    const page = e.currentTarget.dataset.page

    dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: parseInt(page, 10),
    })
  }

  return (
    <Pagination
      {...state}
      onPrevious={handlePrevious}
      onNext={handleNext}
      onToStart={handleToStart}
      onToEnd={handleToEnd}
      onPageClick={handlePageClick}
    />
  )
}

export const Default = () => (
  <ThemeProvider>
    <PaginationWarper currentPage={1} size={20} total={100} />
  </ThemeProvider>
)
