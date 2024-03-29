'use client'
import { useEffect } from 'react'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import { useRouter } from 'next/router'
import AddEditProduct from 'src/views/product/AddEditProduct'
import useProduct from 'src/@core/hooks/stores/product/product'

const ProductDetails = () => {
  const router = useRouter()
  const { PRCD } = router.query
  const productStore = useProduct()

  useEffect(() => {
    productStore.getData({ prcd: PRCD })
  }, [PRCD])

  return (
    <Card>
      <CardHeader title='Tambah Produk' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <AddEditProduct/>
    </Card>
  )
}

export default ProductDetails
