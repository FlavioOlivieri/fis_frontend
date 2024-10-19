import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from '../service/ProductService';
import '../css/Shop.css';

export default function Shop(visible, onHide) {
    const [products, setProducts] = useState([]);

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'Disponibilità ottima':
                return 'success';

            case 'Disponibilità scarsa':
                return 'warning';

            case 'Esaurito':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div>
                <div className='imgProduct'>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='detailsProduct'>
                    <h2>{product.name}</h2>
                    <h4>{product.price}</h4>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div>
                        <Button icon="pi pi-shopping-bag" className="p-button p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="carousel-container">
            <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="30rem"
                itemTemplate={productTemplate} />
        </div>
    );
}