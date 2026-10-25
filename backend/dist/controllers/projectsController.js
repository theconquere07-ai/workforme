"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProjects = listProjects;
exports.createProject = createProject;
exports.getProject = getProject;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;
const supabase_1 = require("../services/supabase");
async function listProjects(req, res) {
    const { data, error } = await supabase_1.supabase
        .from('projects')
        .select('*')
        .eq('user_id', req.user.id)
        .order('created_at', { ascending: false });
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.json(data);
}
async function createProject(req, res) {
    const { data, error } = await supabase_1.supabase
        .from('projects')
        .insert({ ...req.body, user_id: req.user.id })
        .select()
        .single();
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.status(201).json(data);
}
async function getProject(req, res) {
    const { data, error } = await supabase_1.supabase
        .from('projects')
        .select('*')
        .eq('id', req.params.id)
        .eq('user_id', req.user.id)
        .single();
    if (error || !data) {
        res.status(404).json({ error: 'Project not found' });
        return;
    }
    res.json(data);
}
async function updateProject(req, res) {
    const { data, error } = await supabase_1.supabase
        .from('projects')
        .update({ ...req.body, updated_at: new Date().toISOString() })
        .eq('id', req.params.id)
        .eq('user_id', req.user.id)
        .select()
        .single();
    if (error || !data) {
        res.status(404).json({ error: error?.message || 'Project not found' });
        return;
    }
    res.json(data);
}
async function deleteProject(req, res) {
    const { error } = await supabase_1.supabase
        .from('projects')
        .delete()
        .eq('id', req.params.id)
        .eq('user_id', req.user.id);
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.status(204).send();
}
