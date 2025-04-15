import multer from 'multer'
import storage from '../utils/handle-Storage.js'

const uploadsMiddleware = multer( { storage } )


export default uploadsMiddleware