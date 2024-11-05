if (req.method = 'DELETE') {
    deleteTasks(req, res);
} else {
    res.witeHead(404, 'Data Not Found', { 'content-type': 'application/json' });
    res.end(JSON.stringify({
        message: "Unknown Method required."
    }));
}
