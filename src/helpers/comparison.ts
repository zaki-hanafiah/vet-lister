import { isEmpty, isEqual, xorWith } from 'lodash-es'
import { ObjectWithAnyKey } from '@/definitions'

export const isArrayEqual = (x: ObjectWithAnyKey[], y: ObjectWithAnyKey[]) =>
    isEmpty(xorWith(x, y, isEqual))
// __afill_20260624_1411__
