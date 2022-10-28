
const nodemailer=require('nodemailer')

const postEmail=async(req,res)=>{
    const {name,email,body}=req.body;
    try{
        let mailTranspoter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'contactus.iste@gmail.com',
                pass:'xjmbrtzqjavoumfu',
        
            }
            
        });
        let details={
            
            from:req.body.email,
            to:'contactus.iste@gmail.com',
            subject:'ISTE Website',
            text:req.body.name+"\n"+req.body.email+"\n\n"+req.body.body
        
        
        };
        let details2={
            
            from:req.body.email,
            to:req.body.email,
            subject:'ISTE Website',
            text:"Thank you for contacting ISTE Manipal. We will get back to you soon."
        
        
        };
        
        mailTranspoter.sendMail(details,(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Email sent");
            }
        }
        )
        mailTranspoter.sendMail(details2,(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Email sent");
            }
        }
        )
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports.postEmail=postEmail