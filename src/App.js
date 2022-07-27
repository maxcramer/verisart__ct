import { useState, useEffect } from "react";
import { storage, Firestore } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

import "./App.css";

function App() {
  const [imageList, setImageList] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);

  const imageListRef = ref(storage, "images/");
  // Calling images from firebase Storage
  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // uploading image to firebase Storage
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  return (
    <div className="App">
      <div>
        <h3>Upload File</h3>
        <input
          type="file"
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload NFT</button>
        {imageList.map((url, index) => {
          return (
            <div key={index}>
              <img src={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
