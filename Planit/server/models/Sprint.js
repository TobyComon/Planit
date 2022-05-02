// @ts-ignore
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SprintSchema = new Schema({
    notes: [{type: String, required: true}],
    tasks: [{type: String, required: true}],
},
{timestamps: true,
toJSON: {virtuals: true}
}

)
SprintSchema.virtual('Account',
{
localField: 'accountId',
foreignField: '_id',
ref: 'Account',
justOne: true
})