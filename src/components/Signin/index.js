import React from 'react'
import ScrollToTop from '../ScrollToTop.js'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    Text
} from './SigninElements';

const Datenschutz = () => {
    return (
        <>
            <ScrollToTop />
            <Container>
                <FormWrap>
                    <Icon to="/">ElioPourLesNoobs</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1><strong>Impressum</strong></FormH1>
                            <Text>
                                blabla
                            </Text>
                            <FormH1><strong>Datenschutzerklärung</strong></FormH1>
                            <Text>
                                blabla
                            </Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Datenschutz
