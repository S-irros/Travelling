import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Updatedata() {
    const navigate = useNavigate();
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState();
    const [disPrice, setdisPrice] = useState();
    const [Rating, setRating] = useState();
    const [Description, setDescription] = useState('');
    const[Review_Numbers , setReviewNumbers] = useState();
    const [images, setImages] = useState();
const {id } =useParams();
    useEffect(() => {
            fetch(`http://localhost:3000/packages/${id}`)
           .then(res => res.json() )
           .then(data => {
            setTitle(data.Title);
            setPrice(data.Price);
            setdisPrice(data.disPrice);
            setRating(data.Rating);
            setDescription(data.Description);
            setReviewNumbers(data.Review_Numbers);
            setImages(data.src1);
           
            })
           .catch(error => {
                console.error('Error fetching :', error);
            });
        
    }, [id]);

    const updateData = (e) => {
        e.preventDefault();
    
        axios.put(`http://localhost:3000/packages/${id}`, {
            Title,
            Price,
            disPrice,
            Rating,
            Description,
            Review_Numbers,
            src1:`/img/${images}`,

        })
        .then(response => {  
            alert('Product added successfully!');
            setTitle('');
            setPrice('');
            setdisPrice('');
            setRating('');
            setDescription('');
            setReviewNumbers('');
            setImages('');
            navigate('/packages');
        })
        .catch(error => {
            console.error('Error adding product:', error);
        });
    
}
  

        return (
            <div className="container">
                <form >
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        placeholder="Title"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        value={Price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"
                        placeholder="Price"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Discount Price</label>
                    <input
                        type="number"
                        value={disPrice}
                        onChange={(e) => setdisPrice(e.target.value)}
                        className="form-control"
                        placeholder="Discount Price"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <input
                        type="number"
                        value={Rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="form-control"
                        placeholder="Rating"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Review Numbers</label>
                    <input
                        type="number"
                        value={Review_Numbers}
                        onChange={(e) => setReviewNumbers(e.target.value)}
                        className="form-control"
                        placeholder="Review Numbers"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        placeholder="Description"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Images</label>
                    <input
                        type="file"
                        onChange={(e) => setImages(e.target.files[0].name)} // Store the file
                        className="form-control"
                    />
                </div>
                    <button onClick={updateData} type="submit">Add Product</button>
                </form>
            </div>
        );
        }