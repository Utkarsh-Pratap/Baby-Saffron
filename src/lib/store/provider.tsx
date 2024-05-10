'use client';
import React, { PropsWithChildren, useRef } from 'react';
import { createStore, ReduxStore } from '.';
import { Provider } from 'react-redux';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const ReduxProvider = ({ children }: Props) => {
  const store = useRef<ReduxStore | null>(null);

  if (!store.current) store.current = createStore();

  return <Provider store={store.current}>{children}</Provider>;
};

export default ReduxProvider;
