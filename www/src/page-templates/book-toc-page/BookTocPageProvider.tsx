import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import BookTocPage from "./BookTocPage";
import SEO from "../../components/seo";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { MobxBookTocContext } from "../../mobx__react-content-provider/MobxBookTocProvider";
import { createBookTocMobxEntry, UseBookTocStores } from "../../stores/mobx-entry__book_toc";
import { BookTocNode, TreeNode } from "../../stores/BookTocTreeStore";
import { BehaviorNotificationContext } from "../../react__context/BehaviorNotificationContext";
import { IBookChapterPageContentData } from "../../../plugins/gatsby-pages/create-book-page";


interface IBookTocPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
        pageContentData:IBookChapterPageContentData;
        bookTocTree:TreeNode<BookTocNode>[];
    }
}

const BookTocPageProvider: FC<IBookTocPageProviderProps> = ( { pageContext } ) => {
    let { bookTocTree } = pageContext;
    let bookTocStoresRef = useRef<UseBookTocStores>( createBookTocMobxEntry( {
        bookTocTree
    } ) );


    return (
        <MobxBookTocContext.Provider value={bookTocStoresRef.current}>
            <BehaviorNotificationContext.Provider value={bookTocStoresRef.current.behaviorNotificationStore}>
                <BaseLayout>
                    <SEO/>
                    <BookTocPage/>
                </BaseLayout>
            </BehaviorNotificationContext.Provider>
        </MobxBookTocContext.Provider>
    )
};

export default BookTocPageProvider