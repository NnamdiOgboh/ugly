import { Col, Container, Row } from "react-bootstrap"


export const Gallery = () => {

    const gallery = [
        {
            title: "Name of Art",
            description: "Description of the iamge",
            imgURL: projImg1
        },
        {
            title: "Name of Art",
            description: "Description of the iamge",
            imgURL: projImg1
        },
        {
            title: "Name of Art",
            description: "Description of the iamge",
            imgURL: projImg1
        },
        {
            title: "Name of Art",
            description: "Description of the iamge",
            imgURL: projImg1
        },
        {
            title: "Name of Art",
            description: "Description of the iamge",
            imgURL: projImg1
        },
        {
            title: "Name of Art",
            description: "Description of the iamge",
            imgURL: projImg1
        },
    ]

    return (
        <section className="gallery" id="gallery">
            <Container>
                <Row>
                    <Col>
                        <h2>Gallery</h2>
                        <p>This section is for your gallery. So you can do a brief introduction before the gallery</p>
                        <Tab.Container id="gallery-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.item>
                                <Nav.item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.item>
                                <Nav.item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            gallery.map((gallery, index) => {
                                                return(
                                                    <p>{gallery.title}</p>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">More Gallery</Tab.Pane>
                                <Tab.Pane eventKey="third">More Gallery</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}