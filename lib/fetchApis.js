import { BASE_URL } from "./baseUrl"




export async function safeFetch(url, options = {}) {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        Accept: "application/json",
        ...(options.headers || {}),
      },
    })

    if (!res.ok) {
      console.error("API ERROR:", res.status, res.statusText, url)
      return { ok: false, data: null }
    }

    const contentType = res.headers.get("content-type")

    if (!contentType?.includes("application/json")) {
      console.error("NON-JSON RESPONSE:", contentType, url)
      return { ok: false, data: null }
    }

    const json = await res.json()
    return { ok: true, data: json }

  } catch (error) {
    console.error("FETCH FAILED:", url, error)
    return { ok: false, data: null }
  }
}

export async function getSettings() {
  const API_URL = `${BASE_URL}/frontend/settings`;

  const res = await fetch(API_URL, {
    next: { revalidate: 30 },
  });
  const json = await res.json();
  return json?.data || [];
}


export async function getLeaderShips() {
  const url = `${BASE_URL}/posts?term_type=leader-ship&order_by=order_column:asc&per_page=100`
  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })
  return ok ? data?.data || [] : []
}
export async function getBusinessVerticals() {
  const url = `${BASE_URL}/posts?term_type=business-verticals&order_by=order_column:asc&per_page=100`
  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })
  return ok ? data?.data || [] : []
}
export async function getSingleBusinessVertical(slug) {
  const url = `${BASE_URL}/post?slug=${slug}`

  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })

  return ok ? data?.data || {} : {}
}
export async function getPartners() {
  const url = `${BASE_URL}/posts?term_type=partners&order_by=order_column:asc&per_page=200`
  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })
  return ok ? data?.data || [] : []
}

export async function getSingleProduct(slug) {
  const url = `${BASE_URL}/post?slug=${slug}`

  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })

  return ok ? data?.data || {} : {}
}

export async function getCategoriesBySlug({ catSlug }) {
  const API_URL = `${BASE_URL}/categories?taxonomy_type=${catSlug}&limit=10&order_by=order_column&order_direction=asc`;

  const res = await fetch(API_URL, {
    next: { revalidate: 30 },
  });
  const json = await res.json();
  return json?.data || [];
}


export async function getProductsByCategorySlug(slug, page = 1, perPage = 200) {
  const API_URL = `${BASE_URL}/posts?term_type=our-products&category_slug=${slug}&per_page=${perPage}&page=${page}`;

  const res = await fetch(API_URL, {
    next: { revalidate: 30 },
  });
  const json = await res.json();
  return json || { success: false, data: [], meta: {} };
}


export async function getSingleCategory(slug) {
  const url = `${BASE_URL}/category?slug=${slug}`

  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })

  return ok ? data?.data || {} : {}
}

export async function getBreadComeByCategorySlug(slug) {
  const url = `${BASE_URL}/breadcrumb?category_slug=${slug}`

  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })

  return ok ? data?.breadcrumbs || [] : []
}

export async function getBreadComeByProductSlug(slug) {
  const url = `${BASE_URL}/breadcrumb?slug=${slug}`

  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })

  return ok ? data?.breadcrumbs || [] : []
}



export async function getSliders() {
  const url = `${BASE_URL}/posts?term_type=slider&order_by=order_column:asc`
  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })

  return ok ? data?.data || [] : []
}

export async function getProducts() {
  const url = `${BASE_URL}/posts?term_type=products&order_by=order_column&order_direction=desc&per_page=18`
  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })
  return ok ? data?.data || [] : []
}




export async function getFeaturedProducts(per_page = 20) {
  const url = `${BASE_URL}/posts?term_type=products&order_by=order_column:desc&per_page=${per_page}&is_featured=Yes`
  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })
  return ok ? data?.data || [] : []
}



export async function getCategories(type) {
  const url = `${BASE_URL}/categories?taxonomy_type=${type}&limit=300&order_by=order_column&order_direction=asc`
  //  const url = `${BASE_URL}/api/v1/categories?taxonomy_type=${type}&order_by=order_column&order_direction=desc`
  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })

  return ok ? data?.data || [] : []
}

export async function getSingleProductBreadCrumb(slug) {
  const url = `${BASE_URL}/breadcrumb?slug=${slug}`

  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })

  return ok ? data?.breadcrumbs || [] : []
}



export async function getSingleOfferProducts(slug) {
  const url = `${BASE_URL}/offers/${slug}/products`

  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })

  return ok ? data || {} : {}
}



export async function getBrands() {
  const url = `${BASE_URL}/brands?page=1&per_page=20&is_featured=Yes`
  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })
  return ok ? data?.data || [] : []
}

export async function getSinglePage(id) {
  const url = `${BASE_URL}/post?id=${id}`

  const { ok, data } = await safeFetch(url, {
    next: { revalidate: 30 },
  })

  return ok ? data?.data || {} : {}
}

// ?taxonomy_type=product_categories&limit=10&order_by=order_column&order_direction=desc